import { getEmergencyWaitingQueue } from '../src/queue';

describe('Sistema de colas', () => {
  describe('Debe entregar la cola completa', () => {
    it('Entrega un arreglo como respuesta', () => {
      expect(Array.isArray(getEmergencyWaitingQueue())).toBe(true);
    });
  });
});
