import { storiesOf, moduleMetadata  } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withKnobs,number, text, boolean, array, select, radios, color, date, button } from '@storybook/addon-knobs';

import { Welcome, Button } from '@storybook/angular/demo';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { QuantityEditComponent } from '../app/quantity-edit/quantity-edit.component';
import { MyAccountComponent } from '../app/my-account/my-account.component';
import { SocialMediaCardComponent } from '../app/social-media-card/social-media-card.component';



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
 
 .addDecorator(withNotes)
 .add('With Action Logger', () => ({
  component: QuantityEditComponent,
  props:{
    onQuantityChangeEvent: action('Quantity was changed'),
  }
 }))
 .addDecorator(withKnobs)
 .add('Simple Knobs', () => {
   const quantity = number('currentQuantity',0);
   
   return {
     moduleMetadata: {
       entryComponents:[QuantityEditComponent],
       declarations:[QuantityEditComponent],
     },

     template: `
     <input name="quantity" />
     <app-quantity-edit [currentQuantity] = "quantity"> </app-quantity-edit>
      `,
      props: {
        quantity,
      },      
   };
 })

storiesOf('Social Media Card', module)
  .add('Default', () => ({
    component: SocialMediaCardComponent,
    props: {

    },
  }))
  .addDecorator(
    withBackgrounds([{ name: 'twitter', value: '#00aced', default: true }, 
    { name: 'facebook', value: '#3b5998' },
    {name:'plain', value: 'white'}])
  )
  .add('background component', () => ({
    component: SocialMediaCardComponent,
    props: {},
  }))
  .addDecorator(withKnobs)
  .add('Color change', () => {
    const backColor = color ('backColor', 'grey');
    const btnColor = color('btnColor', 'teal');
    return {
      moduleMetadata: {
        entryComponents: [SocialMediaCardComponent],
        declarations: [SocialMediaCardComponent],
      },
      template: `
      <app-social-media-card [buttonColor]="btnColor"
      [backgroundColor]="backColor" ></app-social-media-card>`,
      
      props: {
        backColor,
        btnColor
      },
    };
  })
  

storiesOf('Account Info', module)
.add('Default', () => ({
  component: MyAccountComponent,
  props: {

  },
}))
.addDecorator(withKnobs)
  .add('Simple Knobs', () => {
    const name = text('name', 'Indira Raghavan');
    const email = text('email', 'Indira.Raghavan@Staples.ca');
    const dateofbirth = text('dateofbirth', '16-11-1986');

    return {
      moduleMetadata: {
        entryComponents: [MyAccountComponent],
        declarations: [MyAccountComponent],
      },
      template: `
        <h1> This is a template </h1>
        <app-my-account
          [name]="name"
          [email]="email"
          [dateofbirth]="dateofbirth"
        >
        </app-my-account>
      `,
      props: {
        name,
        email,
        dateofbirth,
      },
    };
  })



// storiesOf('Button', module)
//   .add('with text', () => ({
//     component: Button,
//     props: {
//       text: 'Hello Button',
//     },
//   }))
//   .add(
//     'with some emoji',
//     withNotes({ text: 'My notes on a button with emojis' })(() => ({
//       component: Button,
//       props: {
//         text: '😀 😎 👍 💯',
//       },
//     }))
//   )
//   .add(
//     'with some emoji and action',
//     withNotes({ text: 'My notes on a button with emojis' })(() => ({
//       component: Button,
//       props: {
//         text: '😀 😎 👍 💯',
//         onClick: action('This was clicked OMG'),
//       },
//     }))
//   );

// storiesOf('Another Button', module).add('button with link to another story', () => ({
//   component: Button,
//   props: {
//     text: 'Go to Welcome Story',
//     onClick: linkTo('Welcome'),
//   },
// }));

 
  
  