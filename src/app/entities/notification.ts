import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { Content } from './content';

export interface NotificationProps {
  content: Content;
  category: string;
  readedAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

export class Notification {
  private props: NotificationProps;
  private _id: string;

  constructor(_props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ..._props,
      createdAt: _props.createdAt ?? new Date(),
    };
  }

  public set id(_id: string) {
    this._id = _id;
  }

  public get id() {
    return this._id;
  }

  public set content(_content: Content) {
    this.props.content = _content;
  }

  public get content() {
    return this.props.content;
  }

  public set category(_category: string) {
    this.props.category = _category;
  }

  public get category() {
    return this.props.category;
  }

  public set readedAt(_readedAt: Date | null | undefined) {
    this.props.readedAt = _readedAt;
  }

  public get readedAt() {
    return this.props.readedAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public set recipientId(_recipientId: string) {
    this.props.recipientId = _recipientId;
  }

  public get recipientId() {
    return this.props.recipientId;
  }
}
