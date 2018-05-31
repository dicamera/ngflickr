import {Store} from '@ngrx/store';
import {getPhotos, getPhotoCount} from '../store/selectors';
import {FetchMorePhotos} from '../store/actions';
import {PhotosService} from './photos.service';


describe('PhotosService', () => {
  let service: PhotosService;
  let store;

  beforeEach(() => {
    store = new Store(null, null, null);
    service = new PhotosService(store);
  });


  describe('#getPhotos', () => {
    it('should select with the right selector', () => {
      spyOn(store, 'select');
      service.getPhotos();
      expect(store.select).toHaveBeenCalledWith(getPhotos);
    });
  });


  describe('#getPhotoCount', () => {
    it('should select with the right selector', () => {
      spyOn(store, 'select');
      service.getPhotoCount();
      expect(store.select).toHaveBeenCalledWith(getPhotoCount);
    });
  });

  describe('#getMorePhotos', () => {
    it('should dispacht with the right action', () => {
      spyOn(store, 'dispatch');
      service.getMorePhotos();
      expect(store.dispatch).toHaveBeenCalledWith(new FetchMorePhotos());
    });
  });

});
