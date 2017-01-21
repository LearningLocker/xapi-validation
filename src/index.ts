import { Warning } from 'rulr';
import { statement } from './factory';

export default (data: any): Warning[] => statement(data, ['statement']);
