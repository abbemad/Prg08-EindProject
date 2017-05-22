class Utilities {
    public static checkPlayerColission(plane: Plane, enemy: Enemy): boolean {
        return (plane.x < enemy.x + enemy.width &&
            plane.x + plane.width > enemy.x &&
            plane.y < enemy.y + enemy.height &&
            plane.height + plane.y > enemy.y)
    }
}