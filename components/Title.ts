import { h } from "vue";

interface Props {
  as: {
    type: String;
    default: string;
  };
  class: {
    type: String;
  };
}

export default {
  props: {
    as: {
      type: String,
      default: "h1",
    },
    class: {
      type: String,
    },
  },
  setup(props: Props, { slots }: any) {
    return () =>
      h(
        props.as,
        {
          class: [
            "text-white font-bold block mb-6",
            { "text-4xl": !props.class },
          ],
        },
        slots.default()
      );
  },
};
