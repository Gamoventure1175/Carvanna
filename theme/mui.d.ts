import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        brandColor2: ColorScale;
    }
    interface PaletteOptions {
        brandColor2?: ColorScale;
    }
}

type ColorScale = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};


//Extending the default Material UI palette type to include custom properties