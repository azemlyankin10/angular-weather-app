interface LocalNames {
    de: string;
    ja: string;
    en: string;
    ru: string;
    ascii: string;
    feature_name: string;
    ca: string;
    lt: string;
}

export interface IGeoCodeData {
    name: string;
    local_names: LocalNames;
    lat: number;
    lon: number;
    country: string;
    state: string;
}
