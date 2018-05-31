import {Store} from '@ngrx/store';
import {GroupsService} from './groups.service';

import {getGroups, getGroup, getGroupCount} from '../store/selectors';
import {FetchGroup, FetchMoreGroups} from '../store/actions';


describe('GroupsService', () => {
  let service: GroupsService;
  let store;

  beforeEach(() => {
    store = new Store(null, null, null);
    service = new GroupsService(store);
  });


  describe('#getGroups', () => {
    it('should select with the right selector', () => {
      spyOn(store, 'select');
      service.getGroups();
      expect(store.select).toHaveBeenCalledWith(getGroups);
    });
  });


  describe('#getGroupCount', () => {
    it('should select with the right selector', () => {
      spyOn(store, 'select');
      service.getGroupCount();
      expect(store.select).toHaveBeenCalledWith(getGroupCount);
    });
  });

  describe('#getMoreGroups', () => {
    it('should dispacht with the right action', () => {
      spyOn(store, 'dispatch');
      service.getMoreGroups();
      expect(store.dispatch).toHaveBeenCalledWith(new FetchMoreGroups());
    });
  });

  describe('#getGroup', () => {
    it('should dispacht with the right action', () => {
      spyOn(store, 'dispatch');
      spyOn(store, 'select');
      service.getGroup('1');
      expect(store.select).toHaveBeenCalledWith(getGroup);
      expect(store.dispatch).toHaveBeenCalledWith(new FetchGroup('1'));
    });
  });
});
