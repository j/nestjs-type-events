export class HelloEvent {
  public who: string;

  constructor(private readonly params: any) {
    this.who = this.params.who;
  }
}
