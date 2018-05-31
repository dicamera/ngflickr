import { initialState} from '../reducers/photos.reducer';

import * as selectors from './photos.selectors';

describe('Photo Selectors', () => {
  it('should return the same state', () => {
    const state = {
      search: null,
      photos: initialState,
      groups: null,
    };

    expect(selectors.getPhotos(state)).toEqual(initialState.photo);
    expect(selectors.getPhotosLoading(state)).toEqual(initialState.loading);
    expect(selectors.getPhotosLoaded(state)).toEqual(initialState.loaded);
    expect(selectors.getPhotosCurrentPage(state)).toEqual(initialState.page);
    expect(selectors.getPhotoCount(state)).toEqual(initialState.total);
  });
});
