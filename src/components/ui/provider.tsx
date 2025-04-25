"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  const config = defineConfig({
    theme: {
      tokens: {
        colors: {},
        fonts: {
          heading: {
            value: `'Proxima Nova', sans-serif`,
          },
          body: {
            value: `'Proxima Nova', sans-serif`,
          },
        },
      },
    },
  });

  const system = createSystem(defaultConfig, config);

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
