import { Warning } from 'rulr';
import { statement } from './Factory';

export default (data: any): Warning[] => statement(data, ['statement']);
