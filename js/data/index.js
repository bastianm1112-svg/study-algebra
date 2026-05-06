import { unit1 } from './unit1.js';
import { unit2 } from './unit2.js';
import { unit3 } from './unit3.js';
import { unit4 } from './unit4.js';
import { unit5 } from './unit5.js';
import { unit6 } from './unit6.js';
import { unit7 } from './unit7.js';
import { unit8 } from './unit8.js';
import { unit9 } from './unit9.js';

export const allUnits = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9];

export function getAllUnits() {
  return allUnits;
}

export function getUnitById(id) {
  return allUnits.find(u => u.id === parseInt(id, 10)) || null;
}

export function getTopicById(topicId) {
  for (const unit of allUnits) {
    const topic = unit.topics.find(t => t.id === topicId);
    if (topic) return topic;
  }
  return null;
}

export function getAllTopics() {
  return allUnits.flatMap(u =>
    u.topics.map(t => ({ ...t, unitId: u.id, unitColor: u.color, unitTitle: u.title }))
  );
}
