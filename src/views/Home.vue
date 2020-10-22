<template>
  <Button text="Primary" icon="arrow-right"/>
  <Button text="Disabled Primary" disabled icon="arrow-right" />
  <Button text="Primary Large" size="lg" icon="arrow-right"/>
  <Button text="Disabled Primary Large" disabled size="lg" icon="arrow-right"/>
  <Button text="Disabled Secondary Large" size="lg" type="secondary" icon="arrow-right"/>
  <Button text="Disabled Secondary Large" disabled type="secondary" icon="arrow-right"/>

  <Input type="text" label="Password" id="password"/>
</template>

<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Input from "@/components/Input";
export default {
  name: 'Home',
  components: {Input, Icon, Button}
}
</script>
