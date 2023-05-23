import { Schema } from 'mongoose';

/**
 * Schema に対して一部の書き換えを行って返す
 *
 * - `findOneAndUpdate` を使用すると 返却されるドキュメントが更新後のものになる
 * - `findOneAndUpdate` を使用すると version の手動インクリメントがされる
 * @param schema 生の Schema インスタンス
 * @returns いろいろ設定されたあとの Schema インスタンス
 */
export const modifyQuery = (schema: Schema): Schema => {
  schema.pre('findOneAndUpdate', function (next) {
    this.setOptions({ new: true });
    this.set('version', this.get('version') + 1);
    return next();
  });

  return schema;
};
