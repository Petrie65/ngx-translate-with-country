import {EventEmitter} from "@angular/core";
import {DefaultLangChangeEvent, LangChangeEvent, DefaultCountryChangeEvent, CountryChangeEvent, TranslationChangeEvent} from "./translate.service";

export class TranslateStore {
  /**
   * The default lang to fallback when translations are missing on the current lang
   */
  public defaultLang: string;

  /**
   * The default country to fallback when translations are missing on the current lang
   */
  public defaultCountry: string;

  /**
   * The lang currently used
   */

  public currentLang: string = this.defaultLang;

  /**
   * The country currently used
   */
  public currentCountry: string = this.defaultCountry;

  /**
   * a list of translations per lang
   */
  public translations: any = {};

  /**
   * an array of langs
   */
  public langs: Array<string> = [];

  /**
   * an array of countries
   */
  public countries: Array<string> = [];

  /**
   * An EventEmitter to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
   */
  public onTranslationChange: EventEmitter<TranslationChangeEvent> = new EventEmitter<TranslationChangeEvent>();

  /**
   * An EventEmitter to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
   */
  public onLangChange: EventEmitter<LangChangeEvent> = new EventEmitter<LangChangeEvent>();

  /**
   * An EventEmitter to listen to country change events
   * onCountryChange.subscribe((params: CountryChangeEvent) => {
     *     // do something
     * });
   */
  public onCountryChange: EventEmitter<CountryChangeEvent> = new EventEmitter<CountryChangeEvent>();

  /**
   * An EventEmitter to listen to default lang change events
   * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
   */
  public onDefaultLangChange: EventEmitter<DefaultLangChangeEvent> = new EventEmitter<DefaultLangChangeEvent>();

  /**
   * An EventEmitter to listen to default country change events
   * onDefaultLangChange.subscribe((params: DefaultCountyChangeEvent) => {
     *     // do something
     * });
   */
  public onDefaultCountryChange: EventEmitter<DefaultCountryChangeEvent> = new EventEmitter<DefaultCountryChangeEvent>();
}
