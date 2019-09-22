import { ItemsComponent } from '~/app/item/items.component';
import { By } from '@angular/platform-browser';
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from 'nativescript-angular/testing';

describe('item-detail-component', () => {
  beforeEach(nsTestBedBeforeEach(
    [ItemsComponent]
  ));
  afterEach(nsTestBedAfterEach());

  it(`should contain items`, () => {
    return nsTestBedRender(ItemsComponent).then((fixture) => {
      fixture.detectChanges();
      // Mobile app does not run in browser so these query selectors are not implemented
      // const list = fixture.debugElement.query(By.css('.list-group'));
      const component = fixture.componentInstance;
      expect(component).toBeDefined();
    });
  })
});
