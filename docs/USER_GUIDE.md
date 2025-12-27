# WebXR Motion Capture 使用指南

从数据采集到可视化的完整工作流程。

## 目录

1. [环境准备](#环境准备)
2. [数据采集](#数据采集)
3. [数据转换](#数据转换)
4. [可视化](#可视化)
5. [故障排除](#故障排除)

---

## 环境准备

### 硬件要求

- **VR 设备**: Meta Quest 3 或支持 WebXR Body Tracking 的设备
- **开发机**: macOS/Linux/Windows，推荐 8GB+ 内存
- **GPU**: 可选，用于加速 SMPL-X 渲染

### 软件依赖

1. **Python 环境** (推荐 Python 3.9+)
```bash
# 创建虚拟环境
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 安装依赖
pip install vuer numpy scipy torch smplx
```

2. **SMPL-X 模型文件**
```bash
# 下载 SMPL-X 模型（需要注册账号）
# https://smpl-x.is.tue.mpg.de/

# 推荐目录结构
smpl_models/
  └── smplx/
      ├── SMPLX_NEUTRAL.npz
      ├── SMPLX_MALE.npz
      └── SMPLX_FEMALE.npz
```

3. **浏览器设置**（Quest 3）
   - 打开 Quest 浏览器
   - 进入 `chrome://flags`
   - 启用 "WebXR Incubations"
   - 重启浏览器

### 网络配置

由于 WebXR 需要 HTTPS，使用以下方式之一：

**方式 1: ngrok（推荐）**
```bash
# 安装 ngrok
brew install ngrok  # macOS
# 或从 https://ngrok.com/download 下载

# 启动隧道（在另一个终端）
ngrok http 8012
# 复制生成的 HTTPS URL，如 https://abc123.ngrok.io
```

**方式 2: localtunnel**
```bash
npm install -g localtunnel
lt --port 8012
```

---

## 数据采集

#### 步骤 1: 启动数据采集服务器

```bash
cd /path/to/vuer/vuer/src/vuer/utils

python collect_motion_data.py \
    --session-name demo_session \
    --duration 10 \
    --fps 30 \
    --collect-mesh \
    --port 8012
```

**参数说明**:
- `--session-name`: 录制会话名称（将用于输出文件名）
- `--duration`: 录制时长（秒），自动停止
- `--fps`: 帧率（默认 30）
- `--collect-mesh`: 收集环境网格（可选）
- `--port`: 服务器端口（默认 8012）

#### 步骤 2: 在 VR 设备上访问

```bash
# 在 Quest 3 浏览器中访问
https://abc123.ngrok.io  # 使用你的 ngrok URL
```

#### 步骤 3: 进入 VR 并录制

1. **点击 "Enter VR" 按钮**（左下角 VR 图标）
2. **等待检测**：
   - 屏幕显示 "Recording will start automatically..."
   - 脚本检测到身体数据后自动开始
   - 看到红色 "RECORDING" 标志
3. **表演动作**：
   - 站在原地或移动
   - 确保手部可见（不要放在身后）
   - 避免遮挡摄像头
4. **自动停止**：
   - 达到设定时长后自动保存
   - 脚本显示保存路径

#### 步骤 4: 手动录制同步视频（可选）

将视频放置在：
```bash
vuer/public/static/videos/demo_session.mp4
```

#### 输出文件

```bash
motion_data/
  └── demo_session.json  # 运动数据
      {
        "session_name": "demo_session",
        "fps": 30,
        "frame_count": 300,
        "duration": 10.0,
        "frames": [...],
        "environment_mesh_snapshot": {...}  # 如果使用 --collect-mesh
      }
```

## 数据转换

### 转换为 SMPL-X 参数

```bash
python motion_to_smplx.py \
    --input motion_data/demo_session.json \
    --output smplx_data/smplx_demo_session.json
```

**转换过程**:
```
Converting 300 frames...
  Progress: 5.0% (15/300 frames)
  Progress: 10.0% (30/300 frames)
  ...
  Progress: 100.0% (300/300 frames)
✓ Conversion complete!
✓ Preserved environment mesh: 3 meshes

💾 Saving SMPL-X data...
✓ Saved to: smplx_data/smplx_demo_session.json
```

**输出格式**:
```json
{
  "session_name": "demo_session",
  "fps": 30,
  "frame_count": 300,
  "duration": 10.0,
  "frames": [
    {
      "global_orient": [0.01, 0.02, 0.03],
      "transl": [0.0, 0.9, 0.0],
      "body_pose": [0.1, 0.2, ..., 0.3],  // 63 元素
      "left_hand_pose": [0.0, ..., 0.0],  // 45 元素
      "right_hand_pose": [0.0, ..., 0.0], // 45 元素
      "betas": [0.0, ..., 0.0],           // 10 元素
      "jaw_pose": [0.0, 0.0, 0.0],
      "leye_pose": [0.0, 0.0, 0.0],
      "reye_pose": [0.0, 0.0, 0.0]
    }
  ],
  "environment_mesh_snapshot": {...}
}
```

---

## 可视化

### 方式 1: 骨架可视化（webxr_visualizer.py）

**适用场景**:
- 快速预览
- 调试关节位置
- 查看环境网格
- 不需要 SMPL-X 模型

#### 基础用法

```bash
python webxr_visualizer.py \
    --input motion_data/demo_session.json
```

#### 带视频播放

```bash
python webxr_visualizer.py \
    --input motion_data/demo_session.json \
    --video /static/videos/demo_session.mp4 \
    --static-url http://localhost:8012
```

#### 访问可视化

打开浏览器访问: `http://localhost:8012`

**界面说明**:
- 蓝色点/线: 身体骨架
- 红色点/线: 左手骨架
- 绿色点/线: 右手骨架
- 灰色网格: 环境（如果有）
- 橙色锥体: 头部朝向（相机视角）
- 右下角: 同步视频（如果有）

### 方式 2: 网格可视化（smplx_vuer_server.py）

**适用场景**:
- 生成最终渲染
- 导出到 Blender
- 完整人体网格

#### 基础用法

```bash
python smplx_vuer_server.py \
    --smplx-sequence smplx_data/smplx_demo_session.json \
    --smplx-model path/to/SMPLX_NEUTRAL.npz
```

#### 带视频同步

```bash
python smplx_vuer_server.py \
    --smplx-sequence smplx_data/smplx_demo_session.json \
    --smplx-model path/to/SMPLX_NEUTRAL.npz \
    --video /static/videos/demo_session.mp4 \
    --static-url http://localhost:8012
```

#### 访问可视化

打开浏览器访问: `http://localhost:8012`

**性能提示**:
- 首次加载会预计算所有帧（约 10-30 秒）
- 预计算完成后播放流畅
- 使用 GPU 可加速 5-10 倍

---

## 完整工作流示例

### 示例: 录制瑜伽动作

#### 1. 准备阶段

```bash
# 启动 ngrok
ngrok http 8012
# 记录 URL: https://abc123.ngrok.io
```

#### 2. 开始采集

```bash
python collect_motion_data.py \
    --session-name yoga_tree_pose \
    --duration 15 \
    --collect-mesh
```

在 Quest 3 浏览器访问 `https://abc123.ngrok.io`，进入 VR，执行树式动作 15 秒。

同时在 Quest 上录制视频。

#### 3. 传输视频

```bash
# 从 Quest App 导出视频到电脑
# 重命名并放置到
cp ~/Downloads/quest_video.mp4 vuer/public/static/videos/yoga_tree_pose.mp4
```

#### 4. 转换数据

```bash
python motion_to_smplx.py \
    --input motion_data/yoga_tree_pose.json \
    --output smplx_data/smplx_yoga_tree_pose.json
```

#### 5. 骨架预览

```bash
python webxr_visualizer.py \
    --input motion_data/yoga_tree_pose.json \
    --video /static/videos/yoga_tree_pose.mp4 \
    --static-url http://localhost:8012
```

打开 `http://localhost:8012` 检查关节是否准确。

#### 6. 最终渲染

```bash
python smplx_vuer_server.py \
    --smplx-sequence smplx_data/smplx_yoga_tree_pose.json \
    --smplx-model smpl_models/smplx/SMPLX_NEUTRAL.npz \
    --video /static/videos/yoga_tree_pose.mp4 \
    --static-url http://localhost:8012 \
    --device cuda
```

等待预计算完成，打开 `http://localhost:8012` 查看最终效果。

---

## 故障排除

### 问题 1: Quest 浏览器无法访问服务器

**症状**: 连接超时或拒绝连接

**解决**:
1. 确认 ngrok 正在运行且 URL 正确
2. 确认使用 HTTPS URL（不是 HTTP）
3. 检查防火墙设置
4. 尝试重启 Quest 浏览器

### 问题 2: VR 模式无响应

**症状**: 点击 "Enter VR" 后页面无变化

**解决**:
1. 检查浏览器 flags 设置:
   ```
   chrome://flags
   搜索 "WebXR Incubations"
   确保已启用
   ```
2. 重启浏览器
3. 尝试其他 WebXR 演示确认设备支持

### 问题 3: 录制立即停止

**症状**: 进入 VR 后立即显示 "Auto-stop"

**解决**:
1. 检查身体跟踪是否启用:
   - Quest 设置 → Movement Tracking → Full Body Tracking
2. 确保光线充足
3. 移除遮挡物

### 问题 4: 只记录到空白数据

**症状**: JSON 文件中 frames 为空或只有少量帧

**解决**:
1. 确认已进入 VR 模式（不是浏览器模式）
2. 等待 "Recording" 标志出现后再移动
3. 确保至少15个身体关节被检测到
4. 检查终端日志中的错误信息

### 问题 5: 手部只显示一根手指

**症状**: webxr_visualizer 中只能看到拇指

**解决**:
- 这个问题已在最新版本修复
- 确保使用正确的关节命名（`little` 而非 `pinky`）
- 检查 HAND_CONNECTIONS 从 `palm` 开始

### 问题 6: 视频与动画不同步

**症状**: 视频播放速度与骨架动画不匹配

**解决**:
1. 确保视频帧率与采集帧率相同（都是 30 FPS）
2. 使用 `--fps` 参数调整播放速度
3. 视频在每次循环开始时会重置（`seekTime=0.0`）

### 问题 7: SMPL-X 渲染很慢

**症状**: 帧率低于 10 FPS

**解决**:
1. 使用 GPU 加速: `--device cuda`
2. 等待预计算完成（首次加载）
3. 减少序列长度或降低帧率
4. 关闭浏览器的其他标签页

### 问题 8: SMPL-X 模型未找到

**症状**: `FileNotFoundError: SMPL-X model not found`

**解决**:
1. 确认已下载 SMPL-X 模型
2. 检查路径是否正确
3. 确认文件名为 `SMPLX_NEUTRAL.npz`（大写）

### 问题 9: 环境网格不显示

**症状**: 没有灰色网格背景

**解决**:
1. 确认使用了 `--collect-mesh` 参数
2. Quest 3 需要在设置中启用 Scene Understanding
3. 环境可能没有被识别的几何（尝试在房间中移动）

### 问题 10: 转换后的 SMPL-X 姿态奇怪

**症状**: 人体扭曲或旋转异常

**可能原因**:
1. 采集数据质量差（光线不足、遮挡）
2. 坐标系转换问题
3. 关节映射错误

**调试步骤**:
1. 先用 webxr_visualizer 检查原始骨架是否正确
2. 检查终端输出是否有警告信息
3. 尝试重新采集数据

---

## 高级技巧

### 批量处理

处理多个录制会话：

```bash
#!/bin/bash
for session in session1 session2 session3; do
    echo "Processing $session..."

    # 转换
    python motion_to_smplx.py \
        --input motion_data/${session}.json \
        --output smplx_data/smplx_${session}.json

    # 可视化（后台运行）
    python smplx_vuer_server.py \
        --smplx-sequence smplx_data/smplx_${session}.json \
        --smplx-model path/to/SMPLX_NEUTRAL.npz \
        --port $((8012 + i)) &

    i=$((i + 1))
done
```

### 自定义帧率

加速或减速播放：

```bash
# 2 倍速
python webxr_visualizer.py --input data.json --fps 60

# 慢动作（0.5 倍）
python webxr_visualizer.py --input data.json --fps 15
```

### 导出为其他格式

未来可以添加导出功能：
- FBX/BVH 用于 Blender/Unity
- USD 用于 Omniverse
- glTF 用于 Web

---

## 最佳实践

### 采集环境

1. **光线**: 明亮均匀的光线（避免背光）
2. **空间**: 至少 2m × 2m 的空旷区域
3. **背景**: 简单干净，避免复杂图案
4. **服装**: 紧身衣物，避免宽松衣物遮挡关节

### 动作设计

1. **热身**: 先录制几秒测试数据
2. **节奏**: 匀速流畅的动作比快速抖动好
3. **可见性**: 保持手部在视野内
4. **稳定性**: 避免剧烈跳跃（可能丢失跟踪）

### 数据管理

```bash
# 推荐目录结构
project/
  ├── motion_data/          # 原始采集数据
  ├── smplx_data/           # 转换后的 SMPL-X
  ├── videos/               # 同步视频
  └── exports/              # 导出的其他格式
```

### 性能优化

1. **采集阶段**: 使用合适的 FPS（30 足够，60 仅用于高速动作）
2. **转换阶段**: 单线程即可（瓶颈在算法非 I/O）
3. **渲染阶段**: 使用 GPU 加速，预计算所有帧

---

## 参考资料

- **WebXR 规范**: https://immersive-web.github.io/webxr-body-tracking/
- **SMPL-X 论文**: https://ps.is.mpg.de/uploads_file/attachment/attachment/497/SMPL-X.pdf
- **Quest 3 开发者文档**: https://developer.oculus.com/documentation/web/
- **Vuer 框架**: https://github.com/vuer-ai/vuer

## 获取帮助

遇到问题？
1. 检查终端日志获取详细错误信息
2. 查看 [故障排除](#故障排除) 章节
3. 提交 Issue: https://github.com/your-repo/issues
