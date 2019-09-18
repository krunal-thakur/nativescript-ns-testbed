import { ItemsComponent } from '~/app/item/items.component';
import { By } from '@angular/platform-browser';
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender, nsTestBedInit }     from "nativescript-angular/testing";

describe('item-detail-component', () => {
  beforeAll(() => nsTestBedInit());
  afterAll(() => { });
  beforeEach(nsTestBedBeforeEach(
    [ItemsComponent]
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
