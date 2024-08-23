import type { ParsedContent } from '@nuxt/content';

type DesignProcessType = {
    icon: string | undefined;
    label: string | undefined;
    items: string[] | undefined;
};

export interface ProjectParsedContent extends ParsedContent {
    id: number;
    title: string | undefined;
    description: string | undefined;
    short_description: string | undefined;
    client: string | undefined;
    tags: string[] | undefined;
    goals:
        | {
              description: string | undefined;
              items: string[] | undefined;
          }
        | undefined;
    design_process: DesignProcessType[] | undefined;
    color_palette:
        | {
              hex: string | undefined;
              label: string | undefined;
          }[]
        | undefined;
    tools: string[] | undefined;
}
