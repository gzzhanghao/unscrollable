import { defineComponent, h } from 'vue';

import styles from './style.css';

const AbsoluteFixed = defineComponent({
  setup(_p, { slots }) {
    return () =>
      h(
        'div',
        { class: styles.scrollContainer },
        h(
          'div',
          { class: styles.scrollContent },
          h(
            'div',
            { class: styles.stickyContainer },
            h('div', { class: styles.absoluteContainer }, slots.default?.()),
          ),
        ),
      );
  },
});

export default AbsoluteFixed;
