import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {
    // cho phép ta cung cấp các giá trị mặc định cho các biến trong các mẫu như :
    // {{ image | default:"http://example.com/default-image.png" }}
  transform(value: string, fallback: string, forceHttps: boolean = false): string {
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    if (forceHttps) {
      // tslint:disable-next-line: triple-equals
      if (image.indexOf('https') == -1) {
        image = image.replace('http', 'https');
      }
    }
    return image;
  }
}
