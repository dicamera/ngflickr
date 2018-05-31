import {initialState, reducer} from './photos.reducer';
import * as actions from '../actions/photos.actions';
import {photosFixture} from '../../../test/fixtures/photos.fixture';

describe('Photos reducer', () => {

  describe('No action matched', () => {
    it('should return the same state', () => {
      const state = reducer(initialState, {type: null});
      expect(initialState).toEqual(state);
    });
  });

  describe('FETCH_MORE_PHOTOS', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchMorePhotos();
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('FETCH_PHOTOS', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchPhotos();
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });


  describe('FETCH_MORE_PHOTOS_SUCCESS', () => {
    it('should populate the photos', () => {
      const action = new actions.FetchMorePhotosSuccess(photosFixture.photos);
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.total).toEqual(photosFixture.photos.total);
      expect(state.photo).toEqual(photosFixture.photos.photo);
    });
  });


  describe('FETCH_MORE_PHOTOS_FAIL', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchMorePhotosFail('');
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });
});
