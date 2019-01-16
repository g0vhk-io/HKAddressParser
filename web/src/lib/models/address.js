import * as turf from "@turf/turf"

export default class Address {
  constructor() {
  }

  /**
   * Return the detailed components of the parsed address
   * each element should be in form of
   * {
   *    translatedLabel:
   *    key:
   *    translatedValue:
   * }
   */
  components(lang) {
    return [];
  }

  componentLabelForKey(key, lang) {
    const component = this.components(lang).find(component => component.key === key);
    return component === undefined ? '' : component.translatedLabel;
  }

  componentValueForKey(key, lang) {
    const component = this.components(lang).find(component => component.key === key);
    return component === undefined ? '' : component.translatedValue;
  }

  fullAddress(lang) {
    return null;
  }

  coordinate() {
    return {
      lat: 0,
      lng: 0,
    }
  }

  coordinates() {
    return [];
  }

  /**
   * Return a normalized confident level from 0 - 10
   */
  confidence() {
    return 0;
  }

  distanceTo(address) {
    const cord1 = turf.point([this.coordinate().lat, this.coordinate().lng]);
    const cord2 = turf.point([address.coordinate().lat, address.coordinate().lng]);

    return turf.distance(cord1, cord2, {units: 'kilometers'});
  }
}

Address.LANG_EN = 'eng';
Address.LANG_ZH = 'chi';

