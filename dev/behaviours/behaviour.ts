//interface voor behaviour 
interface Behaviour {
    plane: Plane;
    onKeyDown(e: KeyboardEvent): void;
    draw(): void;
    
}