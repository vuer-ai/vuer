# ML-Dash with params-proto

## Basic Class Object Support

Pass configuration classes directly to `params.log()` or `params.set()`:

```python
from ml_dash import Experiment

class TrainingConfig:
    learning_rate = 0.001
    batch_size = 32
    epochs = 100

class ModelConfig:
    architecture = "resnet50"
    hidden_size = 768
    num_layers = 12

with Experiment(prefix="alice/cv/my-experiment").run as experiment:
    # Pass classes directly - attributes extracted automatically
    experiment.params.log(training=TrainingConfig, model=ModelConfig)

    # Stored as:
    # training.learning_rate = 0.001
    # training.batch_size = 32
    # training.epochs = 100
    # model.architecture = "resnet50"
    # model.hidden_size = 768
    # model.num_layers = 12
```

## params-proto Integration

Seamless integration with `params-proto` classes:

```python
from params_proto import ParamsProto

class TrainingParams(ParamsProto):
    learning_rate: float = 0.001
    batch_size: int = 32
    epochs: int = 100
    warmup_steps: int = 1000

class ModelParams(ParamsProto):
    architecture: str = "transformer"
    hidden_size: int = 768
    num_layers: int = 12
    dropout: float = 0.1

with Experiment(prefix="alice/nlp/transformer-train").run as experiment:
    # Works seamlessly with params-proto classes
    experiment.params.log(
        training=TrainingParams,
        model=ModelParams
    )
```

## Automatic Attribute Extraction

Features of automatic attribute extraction:

- **Private attributes skipped**: Attributes starting with `_` are ignored
- **Magic methods ignored**: `__init__`, `__repr__`, etc. are skipped
- **Callable attributes ignored**: Methods are automatically excluded
- **Nested structures**: Supports deeply nested configurations
- **Flatten to dot notation**: `training.learning_rate`, `model.hidden_size`, etc.

```python
class Config:
    # Public attributes - included
    lr = 0.001
    batch_size = 32

    # Private attributes - automatically skipped
    _internal_state = None
    _cache = {}

    # Methods - automatically skipped
    def get_lr_schedule(self):
        return None

with Experiment(prefix="alice/ml/test").run as experiment:
    experiment.params.log(config=Config)
    # Only public attributes are logged
    # config.lr = 0.001
    # config.batch_size = 32
```

## Multiple Configurations

Combine multiple configuration classes in a single call:

```python
class DataConfig:
    dataset = "imagenet"
    train_size = 1000000
    val_size = 50000
    num_workers = 4

class OptimizerConfig:
    type = "adamw"
    lr = 0.001
    beta1 = 0.9
    beta2 = 0.999
    weight_decay = 0.01

class AugmentationConfig:
    random_crop = True
    flip_prob = 0.5
    color_jitter = 0.4

with Experiment(prefix="alice/ml/resnet-training").run as experiment:
    experiment.params.log(
        data=DataConfig,
        optimizer=OptimizerConfig,
        augmentation=AugmentationConfig
    )
```

## Mixed Configuration Styles

Combine class objects with dictionaries and flat parameters:

```python
class TrainingArgs:
    learning_rate = 0.001
    batch_size = 32

with Experiment(prefix="alice/ml/hybrid-config").run as experiment:
    experiment.params.log(
        training=TrainingArgs,  # Class object
        model={"name": "resnet50", "layers": 50},  # Dict
        run_id="exp-001"  # Flat param
    )

    # All stored with dot notation:
    # training.learning_rate = 0.001
    # training.batch_size = 32
    # model.name = "resnet50"
    # model.layers = 50
    # run_id = "exp-001"
```

## Retrieving Parameters

Get parameters from logged class objects:

```python
with Experiment(prefix="alice/ml/test").run as experiment:
    experiment.params.log(training=TrainingConfig)

    # Retrieve flattened parameters
    params = experiment.params.get()
    print(params)
    # -> {"training.learning_rate": 0.001, "training.batch_size": 32, ...}

    # Retrieve nested structure
    params_nested = experiment.params.get(flatten=False)
    print(params_nested)
    # -> {"training": {"learning_rate": 0.001, "batch_size": 32, ...}}

    # Access specific parameter
    lr = params["training.learning_rate"]
```

## Updated Parameters During Training

Update class-based parameters during training:

```python
with Experiment(prefix="alice/ml/lr-decay").run as experiment:
    # Initial parameters
    experiment.params.log(config=InitialConfig)

    for epoch in range(100):
        if epoch == 50:
            # Update learning rate
            experiment.params.log(**{"config.learning_rate": 0.0001})

        train()
```

## Common Patterns

### Configuration Class Pattern

```python
class Config:
    # Model
    model_name = "bert-base"
    hidden_size = 768
    num_layers = 12

    # Training
    learning_rate = 1e-5
    batch_size = 32
    num_epochs = 3

    # Data
    max_length = 512
    train_split = 0.9

with Experiment(prefix="alice/ml/bert-finetune").run as experiment:
    experiment.params.log(config=Config)
```

### params-proto with Type Hints

```python
from params_proto import ParamsProto

class HyperParams(ParamsProto):
    lr: float = 1e-3
    weight_decay: float = 0.01
    dropout: float = 0.1
    num_layers: int = 12

with Experiment(prefix="alice/ml/typed-config").run as experiment:
    experiment.params.log(hyper=HyperParams)
```

### Environment-Specific Config

```python
import os

class BaseConfig:
    lr = 0.001
    batch_size = 32

class ProdConfig(BaseConfig):
    batch_size = 128
    num_workers = 8

config = ProdConfig if os.getenv("ENV") == "prod" else BaseConfig

with Experiment(prefix="alice/ml/env-aware").run as experiment:
    experiment.params.log(config=config)
```

## Storage and Access

### Local Storage
Parameters are stored in `parameters.json`:

```json
{
  "training.learning_rate": 0.001,
  "training.batch_size": 32,
  "model.architecture": "resnet50"
}
```

### Remote Storage
In remote mode, stored in MongoDB with the same flattened structure for easy querying.
