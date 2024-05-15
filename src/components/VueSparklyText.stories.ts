import type { Meta, StoryObj } from '@storybook/vue3';
import VueSparklyText from "./VueSparklyText.vue";

const meta: Meta<typeof VueSparklyText> = {
  component: VueSparklyText,
  argTypes: {
    size: { control: { type: 'number', defaultValue: 16 } },
  },
  args: {
    size: 30,
    default: 'ipsum'
  }
};

//👇 This default export determines where your story goes in the story list
export default meta;
type Story = StoryObj<typeof VueSparklyText>;

/*
 *👇 Render functions are a framework specific feature to allow you to control how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => ({
    components: { VueSparklyText },
    setup() {
      return { args };
    },
    template: 'Lorem <VueSparklyText v-bind="args">{{args.default}}</VueSparklyText> dolor sit amet',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
};
