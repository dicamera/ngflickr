import {Store} from '@ngrx/store';
import { Search} from '../store/actions';
import {SearchService} from './search.service';


describe('SearchService', () => {
  let service: SearchService;
  let store;

  beforeEach(() => {
    store = new Store(null, null, null);
    service = new SearchService(store);
  });


  describe('#getPhotos', () => {
    it('should select with the right selector', () => {
      spyOn(store, 'dispatch');
      service.search('china');
      expect(store.dispatch).toHaveBeenCalledWith(new Search('china'));
    });
  });
});
