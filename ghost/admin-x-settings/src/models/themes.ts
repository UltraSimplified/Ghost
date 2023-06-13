export type Theme = {
    active: boolean;
    name: string;
    package: {
        name?: string;
        description?: string;
        version?: string;
    };
    templates?: string[];
}

export function isActiveTheme(theme: Theme): boolean {
    return theme.active;
}

export function isDefaultTheme(theme: Theme): boolean {
    return theme.name === 'casper';
}

export function isDeletableTheme(theme: Theme): boolean {
    return !isDefaultTheme(theme) && !isActiveTheme(theme);
}
