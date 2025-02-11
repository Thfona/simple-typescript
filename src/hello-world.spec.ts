import { helloWorld } from './hello-world';

describe('Hello world', () => {
    it('should log "Hello World!"', () => {
        console.log = jest.fn();

        helloWorld();

        expect(console.log).toHaveBeenCalledWith('Hello world!');
    });
});
