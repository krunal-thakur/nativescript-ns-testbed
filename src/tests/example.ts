import { ItemService } from "../app/item/item.service";
import { ItemsComponent } from '~/app/item/items.component';
import { By } from '@angular/platform-browser';
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from 'nativescript-angular/testing';

describe('item-detail-component', () => {
  beforeEach(nsTestBedBeforeEach(
    [ItemsComponent],
    [ItemService]
  ));
  afterEach(nsTestBedAfterEach());

  it(`should contain items`, () => {
    return nsTestBedRender(ItemsComponent).then((fixture) => {
      fixture.detectChanges();
      const list = fixture.debugElement.query(By.css('.list-group'));

      expect(list).toBeDefined();
    });
  })
});
