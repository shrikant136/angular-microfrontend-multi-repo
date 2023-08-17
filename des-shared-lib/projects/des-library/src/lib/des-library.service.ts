import { BehaviorSubject } from 'rxjs';

export class DesLibraryService {
  private _name = new BehaviorSubject('');
  readonly name$ = this._name.asObservable();

  addName(name: string) {
    this._name.next(name);
  }
}
