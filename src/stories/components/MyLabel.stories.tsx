
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';




export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    size: {control: 'select'},
    fontColor: {control: 'color'},
  }
} as ComponentMeta<typeof MyLabel>;


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel  {...args}/>;

export const Basic = Template.bind({});

Basic.args = {
  label: 'MyComponent',
  size : 'normal',
  allCaps: false
};

export const AllCaps = Template.bind({});

AllCaps.args = {
  label: 'MyComponent',
  size : 'normal',
  allCaps: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'MyComponent',
  size : 'normal',
  color: 'secondary'
};


export const Tertiary = Template.bind({});

Tertiary.args = {
  label: 'MyComponent',
  size : 'normal',
  color: 'tertiary'
};

export const CustomFontColor = Template.bind({});

CustomFontColor.args = {
  label: 'MyComponent',
  size : 'normal',
  fontColor: '#5517ac',
};

export const CustomBackgroundColor = Template.bind({});

CustomBackgroundColor.args = {
  label: 'MyComponent',
  size : 'normal',
  fontColor: '#eeeeee',
  backgroundColor: '#000000',
};