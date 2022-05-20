import {ImageConfigurationDto} from "./ImageConfigurationDto";

export interface ConfigurationDto {
    images: ImageConfigurationDto,
    change_keys: string[],
}