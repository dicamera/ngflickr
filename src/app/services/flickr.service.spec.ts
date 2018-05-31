import {TestBed, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {groupsFixture, photosFixture, groupFixture} from '../../test/fixtures';
import {FlickrService, API_URL} from './flickr.service';

describe('FlickrService', () => {
  let injector: TestBed;
  let service: FlickrService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlickrService]
    });
    injector = getTestBed();
    service = injector.get(FlickrService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#searchGroups', () => {
    it('should return an Observable<>', () => {
      const expectedURL = 'https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=4e5a84333af74e057945cf9474f899f0&text=china&format=json&nojsoncallback=1&page=0';
      const dummyGroups = Object.assign({}, groupsFixture);

      service.searchGroups('china', 0).subscribe(groups => {
        expect(groups.group.length).toBe(100);
        expect(groups).toEqual(dummyGroups);
      });

      const req = httpMock.expectOne(expectedURL);
      expect(req.request.method).toBe('GET');
      req.flush(dummyGroups);
    });
  });


  describe('#searchPhotos', () => {
    it('should return an Observable<>', () => {
      const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4e5a84333af74e057945cf9474f899f0&text=china&format=json&nojsoncallback=1&page=0&extras=description,license,date_upload,date_taken,owner_name,icon_server,original_format,last_update,geo,tags,machine_tags,o_dims,views,media,path_alias,url_t';
      const dummyPhotos = Object.assign({}, photosFixture);

      service.searchPhotos('china', 0).subscribe(res => {
        expect(res.photo.length).toBe(100);
        expect(res).toEqual(dummyPhotos);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(dummyPhotos);
      httpMock.verify();
    });
  });


  describe('#searchGroup', () => {
    it('should return an Observable<>', () => {
      const url = 'https://api.flickr.com/services/rest/?method=flickr.groups.getInfo&api_key=4e5a84333af74e057945cf9474f899f0&group_id=1643614@N21&format=json&nojsoncallback=1';
      const dummyGroup = Object.assign({}, groupFixture);

      service.getGroup('1643614@N21').subscribe(res => {
        expect(res.photo.length).toBe(100);
        expect(res).toEqual(groupFixture);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(dummyGroup);
    });
  });

  describe('#search', () => {
    it('should call searchPhotos and searchGroups', () => {
      spyOn(service, 'searchPhotos');
      spyOn(service, 'searchGroups');

      service.search('someterm').subscribe(() => {
        expect(service.searchPhotos).toHaveBeenCalledWith('someterm', 0);
        expect(service.searchGroups).toHaveBeenCalledWith('someterm', 0);
      });
    });
  });

});
