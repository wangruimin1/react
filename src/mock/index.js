import Mock from 'mockjs';
import {seller,goods,ratings} from './data.json';
Mock.mock("/api/seller",seller)
Mock.mock("/api/goods",goods)
Mock.mock("/api/ratings",ratings)