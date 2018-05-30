
export abstract class BaseModel {
  protected fillModelArray<T>(object: BaseModel, key: string, values: Array<T>, type = undefined): void {
    console.log(values);
    if (values) {
      object[key] = new Array<T>();
      for (const value of values) {
        if (type) {
          object[key].push(new type(value));
        } else {
          object[key].push(value);
        }
      }

    }
  }
}
