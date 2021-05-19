<template>
  <div>
    {{ title }}
    <br />
    {{ content }}
  </div>
</template>
<script>
export default {
  /* props: ['content'], */
  props: {
    content: {
      type: String,
      default: () => 'Default data',
      /* validator: (props) => {
        console.log(props)
      }, */
    },
  },
  data: () => ({
    title: 'JavaScript 2',
  }),
  methods: {
    func() {
      console.log(this.content)
      this.$props
    },
  },
}
</script>
