import { storiesOf, moduleMetadata  } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome, Button } from '@storybook/angular/demo';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { QuantityEditComponent } from '../app/quantity-edit/quantity-edit.component';


storiesOf('Welcome', module).add('to Storybook', () => ({
  component: Welcome,
  props: {},
}));

storiesOf('Home Page', module).add('No change', () => ({
  component: HomePageComponent,
  props:{},
}));

storiesOf('Quantity Edit', module)
.add('Default', () => ({
  component: QuantityEditComponent,
  props:{
  },
}))

.add('With Current Quantity', () => ({
  component: QuantityEditComponent,  
  props:{
    onQuantityChangeEvent: (event) => {      
      console.log(event);
    } 
  }
 })) 
 .addDecorator(withNotes)
 .add('With Notes', () => ({
  component: QuantityEditComponent,
  props:{
    onQuantityChangeEvent: action('Quantity was changed'),
  }
 })) 

storiesOf('Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add(
    'with some emoji',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
      },
    }))
  )
  .add(
    'with some emoji and action',
    withNotes({ text: 'My notes on a button with emojis' })(() => ({
      component: Button,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG'),
      },
    }))
  );

storiesOf('Another Button', module).add('button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  },
}));

 
  
  