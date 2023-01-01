<template>
  <div>{{ typedText }}</div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  props: {
    text: {
      type: String,
      default: "Your text here...",
    },
    typeInterval: {
      type: [String, Number],
      default: 100,
    },
  },
  setup(props) {
    const typing = ref(false);
    const typedText = ref("");
    const interval = ref(null);

    function startTyping() {
      typing.value = true;
      interval.value = setInterval(() => {
        if (props.text.length > typedText.value.length) {
          typedText.value += props.text[typedText.value.length];
        } else {
          clearInterval(interval.value);
          typing.value = false;
        }
      }, parseInt(props.typeInterval));
    }

    function stopTyping() {
      clearInterval(interval.value);
      typing.value = false;
    }

    onMounted(() => {
      startTyping();
    });
    onBeforeUnmount(() => {
      stopTyping();
    });

    return {
      typing,
      typedText,
      interval,
      startTyping,
      stopTyping,
    };
  },
};
</script>
