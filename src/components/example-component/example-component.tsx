import {
  Component, h, Prop, State,
} from '@stencil/core';

@Component({
  tag: 'example-component',
  styleUrl: 'example-component.scss',
  shadow: true,
})
export class ExampleComponent {
  // Getting string from stories file
  @Prop() headline: string;

  @State() contactUS = 'contactHidden';

  private menuToggleOn() {
    this.contactUS = 'contactUs';
  }

  private menuToggleOff() {
    this.contactUS = 'contactHidden';
  }

  // eslint-disable-next-line class-methods-use-this
  public render(): JSX.Element {
    return (
      <div>
        <div class="headline">
          <h4>CtA - Main Conversion</h4>
        </div>
        <div class="container">
          <div class="cta">
            <div>
              <h4>A Wonderful serenity has taken possession</h4>
              <p>A Wonderful serenity has taken possession of my entire soul like these sweet
                mockup.</p>
              <button onClick={() => this.menuToggleOn()}>Link button</button>
            </div>
          </div>
          <div class="image">
            <img src="https://tinyurl.com/ezv7d6j6" alt="Man standing at the top of the mountain"/>
          </div>
        </div>
        <div class={this.contactUS}>
          <p>Contact us</p>
          <div class="contacts">
            <p>Virtual Identity AG</p>
            <p>Isarwinkel 1</p>
            <p>81379 München</p>
            <p>t +49 89 179 270 00</p>
            <p>f +49 761 88 79 57 98</p>
            <p>info@virtual-identity.com</p>
          </div>
          <button onClick={() => this.menuToggleOff()}><img src="https://tinyurl.com/7rmmhpxw" alt="close button" /></button>
        </div>
      </div>
    );
  }
}
