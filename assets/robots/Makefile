# Description: Makefile for downloading assets
SHELL = bash

.PHONY: mini_cheetah

define download
    $(eval $@_FILENAME = $(1))
    $(eval $@_PATH = $(2))
	cd "${$@_PATH}" && \
	wget -O "${$@_FILENAME}" https://github.com/geyang/unitree-go1-setup-guide/raw/main/robots/${$@_PATH}/${$@_FILENAME}
endef

#Source: three-mesh-bvh
mini_cheetah:
	mkdir -p mini_cheetah/meshes
	@$(call download,mini_cheetah.urdf,mini_cheetah)
	@$(call download,mini_abad.obj,mini_cheetah/meshes)
	@$(call download,mini_body.obj,mini_cheetah/meshes)
	@$(call download,mini_lower_link.obj,mini_cheetah/meshes)
	@$(call download,mini_upper_link.obj,mini_cheetah/meshes)



