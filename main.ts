namespace SpriteKind {
    export const sign = SpriteKind.create()
    export const evidence = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const Character = SpriteKind.create()
    export const dialoguechar = SpriteKind.create()
}
/**
 * end of player anim section //
 */
// player animation section
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.setCharacterState(maxwellMersch, characterAnimations.rule(Predicate.MovingUp))
    characterAnimations.loopFrames(
    maxwellMersch,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sign, function (sprite, otherSprite) {
    if (otherSprite == signList[0]) {
        game.splash("RIGHT-NEIGHBORHOOD", "LEFT-POLICE STATION")
        pause(1000)
    } else {
        for (let value of signList) {
            if (otherSprite == value) {
                game.splash(textList[signList.indexOf(value)])
                pause(1000)
                break;
            }
        }
    }
})
// thing
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inv == 0) {
        controller.moveSprite(maxwellMersch, 0, 0)
        invUI2 = sprites.create(img`
            ........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff......
            ......ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff....
            .....fdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff...
            ....fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdf..
            ....fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddf.
            ....fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddf.
            ....fddfffffffffffffffffffffffffffdddfffffffffffffffffffffffffffdfdffffffffffffffffffffffffffdddfffffffffffffffffffffffffffddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf.........................fdddf.........................fdfdf........................fdddf.........................fddfddf.
            ....fddf1111111111111111111111111fdddf.........................fdfdf........................fdddf.........................fddfdf..
            ..fffddfffffffffffffffffffffffffffdddfffffffffffffffffffffffffffdfdffffffffffffffffffffffffffdddfffffffffffffffffffffffffffddff...
            .fddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddfffffffffffffffffffffffffffdddfffffffffffffffffffffffffffdfdffffffffffffffffffffffffffdddfffffffffffffffffffffffffffddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddfffffffffffffffffffffffffffdddfffffffffffffffffffffffffffdfdffffffffffffffffffffffffffdddfffffffffffffffffffffffffffddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddfffffffffffffffffffffffffffdddfffffffffffffffffffffffffffdfdffffffffffffffffffffffffffdddfffffffffffffffffffffffffffddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddf.........................fdddf.........................fdfdf........................fdddf.........................fddf....
            fdddfddfffffffffffffffffffffffffffdddfffffffffffffffffffffffffffdfdffffffffffffffffffffffffffdddfffffffffffffffffffffffffffddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf....
            fdddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf.....
            .fddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddf......
            ..fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfddddddddddddddddddddddddddddddddddddddddddddddddddddddddf.......
            ....ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........
            `, SpriteKind.UI)
        invUI2.setPosition(maxwellMersch.x, maxwellMersch.y)
        inv = 1
        if (evlist[0] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 44, maxwellMersch.y - 31)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 44, maxwellMersch.y - 31)
        }
        if (evlist[1] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 14, maxwellMersch.y - 31)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 14, maxwellMersch.y - 31)
        }
        if (evlist[2] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 15, maxwellMersch.y - 31)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 15, maxwellMersch.y - 31)
        }
        if (evlist[3] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 45, maxwellMersch.y - 31)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 45, maxwellMersch.y - 31)
        }
        if (evlist[4] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 44, maxwellMersch.y - 2)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 44, maxwellMersch.y - 2)
        }
        if (evlist[5] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 14, maxwellMersch.y - 2)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 14, maxwellMersch.y - 2)
        }
        if (evlist[6] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 15, maxwellMersch.y - 2)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 15, maxwellMersch.y - 2)
        }
        if (evlist[7] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 45, maxwellMersch.y - 2)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 45, maxwellMersch.y - 2)
        }
        if (evlist[8] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 44, maxwellMersch.y + 28)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 44, maxwellMersch.y + 28)
        }
        if (evlist[9] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 14, maxwellMersch.y + 28)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x - 14, maxwellMersch.y + 28)
        }
        if (evlist[10] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 15, maxwellMersch.y + 28)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 15, maxwellMersch.y + 28)
        }
        if (evlist[11] == 0) {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 45, maxwellMersch.y + 28)
        } else {
            ev0 = sprites.create(img`
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                11111fffffffffffff1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11fffffff11f1111111
                11111f11111111111f1111111
                11111f111fffff111f1111111
                11111f11111111111f1111111
                11111f11111111111f1111111
                11111fffffffffffff1111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                1111111111111111111111111
                `, SpriteKind.UI)
            ev0.setPosition(maxwellMersch.x + 45, maxwellMersch.y + 28)
        }
        canMove = false
    } else {
        sprites.destroyAllSpritesOfKind(SpriteKind.UI)
        inv = 0
        controller.moveSprite(maxwellMersch)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Character, function (sprite, otherSprite) {
    charList = [
    mayorjohn,
    farmerdave,
    judgecrowell,
    liltimmy,
    mrbob,
    mrdoug,
    mrleon,
    mrpicious,
    mscourtney,
    msjefferson,
    mskline,
    olbetsy,
    straydog
    ]
    dialoguelist = [
    "im mayor",
    "im farmer dave",
    "im judge crowell",
    "im lil timmy",
    "mr bob",
    "mr doug",
    "mr leon",
    "mr picious",
    "ms courtney",
    "ms jefferson",
    "ms kline",
    "ol betsy",
    "stray dog"
    ]
    for (let value of charList) {
        if (otherSprite == value) {
            game.showLongText(dialoguelist[charList.indexOf(value)], DialogLayout.Bottom)
        }
    }
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    signList = []
    textList = ["", "NEAL PARK-right"]
    alreadyTouched = true
    if (alreadyTouched) {
        color.startFade(color.originalPalette, color.Black)
        tiles.setCurrentTilemap(tilemap`level6`)
        for (let value2 of tiles.getTilesByType(assets.tile`myTile63`)) {
            sign2 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e f f f f f f f f f f f f e f 
                f e e e e e e e e e e e e e e f 
                f e f f f f f f f f f f f f e f 
                f e e e e e e e e e e e e e e f 
                f e f f f f f f f f f f f f e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                f e e e e e e e e e e e e e e f 
                . f f f f f f e e e e f f f f . 
                . . . . . . f e e e e f . . . . 
                . . . . . . f e e e e f . . . . 
                . . . . . . f e e e e f . . . . 
                . . . . . . f f f f f f . . . . 
                `, SpriteKind.sign)
            tiles.placeOnTile(sign2, value2)
            signList.push(sign2)
        }
        tiles.placeOnRandomTile(maxwellMersch, assets.tile`myTile13`)
        color.startFade(color.Black, color.originalPalette)
        alreadyTouched = false
    }
    initialFollower.follow(maxwellMersch)
    isFollowing = true
    followers.unshift(initialFollower)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.runFrames(
    maxwellMersch,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    1,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
function base (num: number) {
    canMove = false
    if (num == 0) {
        story.showPlayerChoices("ashton", "red pill")
        if (story.checkLastAnswer("red pill")) {
            game.showLongText("neo", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 1) {
        story.showPlayerChoices("cole", "sparks")
        if (story.checkLastAnswer("cole")) {
            game.showLongText("neo", DialogLayout.Bottom)
            pause(100)
            story.showPlayerChoices("cole", "sparks")
            if (story.checkLastAnswer("sparks")) {
                game.showLongText("", DialogLayout.Bottom)
            }
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 2) {
        story.showPlayerChoices("nick", "nick")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 3) {
        story.showPlayerChoices("billy", "billy")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 4) {
        story.showPlayerChoices("ethan", "ethan")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 5) {
        story.showPlayerChoices("burke", "burke")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 6) {
        story.showPlayerChoices("clay", "burn")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 7) {
        story.showPlayerChoices("prewe", "prewe")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 8) {
        story.showPlayerChoices("angie", "decaire")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    if (num == 9) {
        story.showPlayerChoices("francis", "demos")
        if (story.checkLastAnswer("nick")) {
            game.showLongText("nick", DialogLayout.Bottom)
            pause(100)
        } else {
            game.showLongText("gabriel", DialogLayout.Bottom)
            pause(100)
        }
    } else {
    	
    }
    canMove = true
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.setCharacterState(maxwellMersch, characterAnimations.rule(Predicate.MovingLeft))
    characterAnimations.loopFrames(
    maxwellMersch,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.runFrames(
    maxwellMersch,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    1,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.runFrames(
    maxwellMersch,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    1,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.setCharacterState(maxwellMersch, characterAnimations.rule(Predicate.MovingRight))
    characterAnimations.loopFrames(
    maxwellMersch,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.runFrames(
    maxwellMersch,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    1,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.clearCharacterState(maxwellMersch)
    characterAnimations.setCharacterState(maxwellMersch, characterAnimations.rule(Predicate.MovingDown))
    characterAnimations.loopFrames(
    maxwellMersch,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
scene.onHitTile(SpriteKind.Player, 0, function (sprite) {
	
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    story.clearAllText()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dialoguechar, function (sprite, otherSprite) {
    mclist = [
    ashton,
    colesparks,
    nick,
    billy,
    ethan,
    officerburke,
    officerclayburn,
    officerprewe,
    angiedecaire,
    francis
    ]
    for (let value of mclist) {
        if (value == otherSprite) {
            base(mclist.indexOf(value))
        }
    }
})
let mclist: Sprite[] = []
let isFollowing = false
let sign2: Sprite = null
let alreadyTouched = false
let dialoguelist: string[] = []
let charList: Sprite[] = []
let ev0: Sprite = null
let invUI2: Sprite = null
let inv = 0
let textList: string[] = []
let signList: Sprite[] = []
let canMove = false
let evlist: number[] = []
let francis: Sprite = null
let angiedecaire: Sprite = null
let officerprewe: Sprite = null
let officerclayburn: Sprite = null
let officerburke: Sprite = null
let ethan: Sprite = null
let billy: Sprite = null
let nick: Sprite = null
let colesparks: Sprite = null
let judgecrowell: Sprite = null
let liltimmy: Sprite = null
let mskline: Sprite = null
let mrbob: Sprite = null
let mrleon: Sprite = null
let mrdoug: Sprite = null
let msjefferson: Sprite = null
let farmerdave: Sprite = null
let straydog: Sprite = null
let mayorjohn: Sprite = null
let olbetsy: Sprite = null
let mrpicious: Sprite = null
let mscourtney: Sprite = null
let ashton: Sprite = null
let maxwellMersch: Sprite = null
let followers: Sprite[] = []
let initialFollower: Sprite = null
let invUI = null
let isOnChoice = 0
let currentChoice: number[] = []
initialFollower = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Character)
followers = []
color.startFade(color.Black, color.originalPalette)
scene.setBackgroundImage(img`
    5555555555555555555555559999999999999999999993333333333333333333333333333bbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    5555555555555555555555559999999999999999993333333333333333333333333333333bbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    5555555555555555555555559999999999993333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbfffffffffff1fffffffffffffffffffffffffffffffff11111111111111111111111
    55555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    55555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    55555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    55555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffff1fffff11111111111111111111111
    55555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    55555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffff11111111111111111111111
    5555555555555555555555559999999993333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffff1ffffffffffffffffff1111111111111111111111
    5555555555555555555555599999999993333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff1111111111111111111111
    5555555555555555555555599999999933333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbfffbffffffffffffffffffffffffffffffffff1111111111111111111111
    55555555555555555555555999999993333333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffff111111111111111111111
    55555555555555555555559999999933333333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffff111111111111111111111
    55555555555555555555559999999333333333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffff11111111111111111111
    55555555555555555555599999993333333333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffff1111111111111111111
    5555555555555555555599999999933333333333333333333333333333333333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffff111111111111111111
    5555555555555555555599999999933333333333333333333333333333333333333333333bbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffff111111111111111111
    5555555555555555555999999993933333333333333333333333333333333333333333333bbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffff11111111111111111
    555555555555555555999999999333333333333333333333333333b333333333333333333bbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffff111111111111111
    55555555555555555999999999993333333333333333333333333bb333333333333333333bbbbbcbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffff11111111111111
    55555555555555559999999999993333333333333333333333bb33bb3333bb33333333333bbbbbccbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffff1111111111111
    555555555555559999999999999933333333333333333333b33bb3bb33b3bb3333333333bbbbcc1cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffff11111111111
    555555555555599999999999999993333333333bbb333333bb3bbbbb3bbbb33333333333bbcccc111cccccbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff11111111
    55555555555999999999999999999933333333333b333bbbbbbbbb1bbb1b333b333333bbbbccccc111ccccccbbbbbbbbcbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffff
    5555555599999999999999999999999333333bb33bbbbbbb1bbbb11bb111bbbb331bb333bbcccccc11cccccccbbbbbcccbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999333333bbbbbbbb111bbbb1bbbb11bbb33b11bb33bbccccccccccc111ccbbbccccbbbbbbbbcbbbbbfffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999bbbbbbb111bbbb11bbbbbbbbbbb1bbb3bb111bbccccccccccccccc111ccccccccbbbbbbbbcbbbbbfffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999bbbbbb1111bbbbbbbbbbbbbbbbbbbbbbb111bbcccccccccccccccc11ccccccccccccbbbbcbbbbbfffffffffffffffffff1fffffffffffffffffffffffffffff
    999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbcccccccccccccccccccccc1111cccccccccbbbbbfffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999bbbbbbbbbbbbbbbbb9bbbbbbbbbb99bbbbb1bbbccccccccccccccccccccc11ccccccccccccccbbfffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999bbbbbbbbbbbbbbb999bbbbbbbb999bbbbbbbbbccccccccccccccccccccccccccccccc11cccccffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999bbbbbbbbbbbbbbb99bbbbbb9bbbd99bbbbbbbbcccccccccccccccccccccccccccccccc11cccfffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999bbbbbbbbbbbbbbb99bbbbb99bbd99bbbbbbbbcccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999bbbbbbbbbbddd99999bdd99ddd9bbbbbbbbbccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999ddddd99999bddd9dd99bbbbddbbbffcccccccccccffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999ddd9999b9ddd9dd99999bdddbbffccccccccccffffcccccddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999ddd999999dddddd9999dbddddbffcccccccccccfffffffdddffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999dddd999999ddddd9999dbddd99ffbbffcccccccffffffddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999ddddd999999dddd9999d9dddd9fffdfffccccfcfffffdddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999dddd9999999dd9999dd9dddd99ffdffffddffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999ddddd999999ddd999d999ddd99ffdffffddffffffffdddddfffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff
    999999999999999999999999999999999999999999999999ddd99d9999ddddddd999ddd99ffdfffdddffffffdddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999dddddd9999dddddd9999dddd9ffdfffdddfffffdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999ddd999999dddddddd99dddd9ffdfffdddffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999dddd9d9999dddddddddddddfffdffddfffffdddffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999ddddd99999999dddddddddfffdffddffffddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999ddddd99999999ddddddddfffdfdddffdfdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999dddddd99999999dddddddfffdddddffdfddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999dddddd999999999dddddfffddddddfdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999dddddd999999999dddddffddddffffdddffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999dddddd9999999dddddffdddfffffdddfffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999dddddd999999dddddffddfffffffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999ddd9ddd99999dddddffdddffffffddffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999999d9ddd9dddd9999dddddffdddfffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999dd999dddddddddddddfdddddfffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999dddddddddddfdddffffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999999999999999dddddddddddddffffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999ddddddddddddfffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999dddddddddddfffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddddffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999999999999999999ddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddddddfffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddfffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
    9999999999999999999999999999999999999999999999999999999999999999ddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999dddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999ddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddddffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999999999999999999999999999999999999999999999999dddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999ddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999ddddddddddffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999999999999999999999999999ddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999999999999999dddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999999999999999dddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999999999999999999999999999999999999997779777777dddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999999999999999777799999999999999999999999999999977777777777777777666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999977777799999999999999999999999999777777777777777777776666fffffffffffffffffffffffffffffffffffffff6666666666666fffffffffffffffffffffffffffffffff
    977777999999999997777777777999999999999999777999777777777777777777777776666f66ffffffffffffffffffffffffffffffffff66666666666666666fffffffffffffffffffffffffffffff
    77777777799777777777777777777799999999997777777777777777777777777777777666666666fffff666fffffffffffffffffffffff66666666666666666666fffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777777777777777777666666666666666666666666fffffffffffffff6666666666666666666666fffffffffffffffffffffff66666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666ffffffffffff6666666666666666666666666ffffffffffffffffff66666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666fffffffffff66666666666666666666666666666fffffffffff666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666ffffff666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    7777777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
color.pauseUntilFadeDone()
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .cccccccbbbbbb66666666bbbbbbbbbbbbbbbbbbcccc7778
    fcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc
    ffccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccf
    .fccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccf
    ..ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc.
    ..ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc.
    ffccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc..
    fcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccf.
    fcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccff
    fcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccff
    .cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccff
    ..ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc.
    ..ccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc..
    .cccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccc..
    fcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccc.
    fcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccf
    fffcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccf
    ..ffcccccccccccccccccccccccccccccccccccccccccff.
    .ffccccccccccccccccccccccccccccccccccccccccccf..
    .fccccccccccccccccccccccccccccccccccccccccccccf.
    ffccccccccccccccccccccccccccccccccccccccccccccc.
    fccccccfcccccccccccccccccccccccccccccccccccccccf
    fccccccfcccccccccccccccccccccccccccccccf.fcccccf
    fccccf.fccc..ccccf..cccccccc.fcccc..cccf..fccccf
    ffff...fff....ffff...ff.ff....fff....fff....ffff
    `)
game.showLongText("FRUIT OF THE POISONOUS TREE", DialogLayout.Bottom)
color.FadeToBlack.startScreenEffect()
color.pauseUntilFadeDone()
color.startFade(color.Black, color.originalPalette)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scene.centerCameraAt(0, 0)
color.pauseUntilFadeDone()
story.setSoundEnabled(true)
story.printText("Demos can't keep getting away with this.", 0, 0, 15, 1, story.TextSpeed.Slow)
story.printText("The problem is, no one has the guts to come after him.", 0, 0, 15, 1, story.TextSpeed.Slow)
story.printText("No one except...", 0, 0, 15, 1, story.TextSpeed.Slow)
story.printText("Me .", 0, 0, 15, 1, story.TextSpeed.VerySlow)
tiles.setCurrentTilemap(tilemap`level1`)
maxwellMersch = sprites.create(img`
    . f f f f f f f f f f f . 
    . f 2 2 2 2 2 2 2 2 2 f . 
    f 2 2 2 2 2 2 2 2 2 2 2 f 
    f f f f f f f f f f f f f 
    f f f c f f f f f f f c . 
    c c c f f f d d f f c c . 
    f f f f f d d f f c c f . 
    f f f b f d d f b f f f . 
    . f d 1 f d d f 1 d f . . 
    . f d d d d d d d d f . . 
    . f f f d d e e f f f . . 
    f 2 f 2 2 f f 2 2 f 2 f . 
    2 2 f 2 2 f f 2 2 f 2 2 . 
    d d f 2 2 f f 2 2 f d d . 
    . . . f f 5 5 f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
ashton = sprites.create(img`
    . f f f f f f f f f f f . 
    . f f f f f f f f f f f . 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    c c c f f f d d f f c c . 
    f f f f f f d f f f c f . 
    f f f f f f f f f f f f . 
    . f d f f f d f f f f . . 
    . f d d d d d d d d f . . 
    . f f f d d e e f f f . . 
    f f f f f b b f f f f f . 
    f f f f f b b f f f f f . 
    d d f f f b b f f f d d . 
    . . f f f f f f f f . . . 
    . . f f f . . f f f . . . 
    `, SpriteKind.dialoguechar)
ashton.setPosition(225, 150)
scene.cameraFollowSprite(maxwellMersch)
let paper = sprites.create(img`
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 f f f f f f f f f 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
    `, SpriteKind.evidence)
paper.setPosition(115, 57)
mscourtney = sprites.create(img`
    . . e e e e d e e e e e . . 
    . . e d d d d d d d d e . . 
    . e d e d d d d d d e d e . 
    e e d d e e e e e e d d e e 
    . e e e d d d d d d e e e . 
    f 5 5 e e e e e e e e 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f d d d d d d f 4 e . 
    . 4 d c d d d d d d c d 4 . 
    . 4 f b e e 5 5 e b b f 4 . 
    . . f f e e e e e e f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Character)
mscourtney.setPosition(135, 70)
mrpicious = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f e 4 4 e e e e e f f 
    f e e 4 4 4 e e e e e f 
    f e e 4 4 4 4 e e e e f 
    f e e 4 4 4 4 4 4 e e f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 4 4 4 4 4 4 4 e f 
    . f e 4 4 b b 4 4 e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f f f 1 1 f f f 4 e 
    4 f f f f f f f f f f 4 
    4 f e e e 5 5 e e e f 4 
    . . f f f f f f f f . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Character)
mrpicious.setPosition(150, 70)
olbetsy = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f b b b b f f . . . 
    . . f b b b b b b b b f . . 
    . f b b b b b b b b b b f . 
    . f b b b c b b c b b b f . 
    f b b b c 4 4 4 4 c b b b f 
    f b b c c 4 4 4 4 c c b b f 
    f c c f c f 4 4 f c f c c f 
    f c c 4 1 f d d f 1 4 c c f 
    . f c f d d d d d d f c f . 
    . f 3 f 3 3 4 4 3 3 f 3 f . 
    . 3 3 f 3 3 a a 3 3 f 3 3 . 
    . 4 d c 3 3 a a 3 3 c d 4 . 
    . 4 f b a a a a a a b f 4 . 
    . . f f a b a b a a f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Character)
olbetsy.setPosition(165, 70)
mayorjohn = sprites.create(img`
    . . . . . . . . . . . . 
    . . f f f f f f f f . . 
    . f f 1 1 1 1 1 1 f f . 
    . f 1 1 b b b b 1 1 f . 
    . f b b b b b b b b f . 
    . f b b d d d d b b f . 
    f b d d d d d d d d b f 
    f d d f f d d f f d d f 
    f d d d d d d d d d d f 
    . f d d d b b d d d f . 
    . . f d d d d d d f . . 
    . f f f 1 2 2 1 f f f . 
    . f f f f 2 2 f f f f . 
    . d d f f 5 5 f f d d . 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Character)
mayorjohn.setPosition(180, 70)
straydog = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
straydog.setPosition(115, 85)
farmerdave = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
farmerdave.setPosition(130, 85)
msjefferson = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
msjefferson.setPosition(145, 85)
mrdoug = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
mrdoug.setPosition(160, 85)
mrleon = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
mrleon.setPosition(115, 100)
mrbob = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
mrbob.setPosition(130, 100)
mskline = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
mskline.setPosition(145, 100)
liltimmy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
liltimmy.setPosition(160, 100)
judgecrowell = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Character)
judgecrowell.setPosition(175, 100)
colesparks = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.dialoguechar)
colesparks.setPosition(200, 125)
nick = sprites.create(img`
    . f f f f f f f f f f f . 
    . f f f f f f f f f f f . 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    c c c f f f d d f f c c . 
    f f f f f f d f f f c f . 
    f f f f f f f f f f f f . 
    . f d f f f d f f f f . . 
    . f d d d d d d d d f . . 
    . f f f d d e e f f f . . 
    f f f f f b b f f f f f . 
    f f f f f b b f f f f f . 
    d d f f f b b f f f d d . 
    . . f f f f f f f f . . . 
    . . f f f . . f f f . . . 
    `, SpriteKind.dialoguechar)
nick.setPosition(225, 125)
billy = sprites.create(img`
    . f f f f f f f f f f f . 
    . f f f f f f f f f f f . 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    c c c f f f d d f f c c . 
    f f f f f f d f f f c f . 
    f f f f f f f f f f f f . 
    . f d f f f d f f f f . . 
    . f d d d d d d d d f . . 
    . f f f d d e e f f f . . 
    f f f f f b b f f f f f . 
    f f f f f b b f f f f f . 
    d d f f f b b f f f d d . 
    . . f f f f f f f f . . . 
    . . f f f . . f f f . . . 
    `, SpriteKind.dialoguechar)
billy.setPosition(250, 125)
ethan = sprites.create(img`
    . f f f f f f f f f f f . 
    . f f f f f f f f f f f . 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    f f f f f f f f f f f f f 
    c c c f f f d d f f c c . 
    f f f f f f d f f f c f . 
    f f f f f f f f f f f f . 
    . f d f f f d f f f f . . 
    . f d d d d d d d d f . . 
    . f f f d d e e f f f . . 
    f f f f f b b f f f f f . 
    f f f f f b b f f f f f . 
    d d f f f b b f f f d d . 
    . . f f f f f f f f . . . 
    . . f f f . . f f f . . . 
    `, SpriteKind.dialoguechar)
ethan.setPosition(275, 125)
officerburke = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f 9 9 9 9 9 9 f . . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . f 8 8 9 9 9 9 9 9 8 8 f . . 
    . . f f f 8 8 8 8 8 8 f f f . . 
    . . f f 8 f f f f f f 8 f f . . 
    . . f f f 8 8 8 8 8 8 f f f . . 
    . f f d f b f d d f b f d f f . 
    . f d d d 1 f d d f 1 d d d f . 
    . . f d d d d 1 1 d d d d f . . 
    . . . f d d 1 d d 1 d d f . . . 
    . . 8 8 f 9 9 9 9 5 9 f 8 8 . . 
    . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
    . . d d f f f 5 5 f f f d d . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.dialoguechar)
officerburke.setPosition(200, 150)
officerclayburn = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.dialoguechar)
officerclayburn.setPosition(225, 150)
officerprewe = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.dialoguechar)
officerprewe.setPosition(250, 150)
angiedecaire = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.dialoguechar)
angiedecaire.setPosition(275, 150)
francis = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.dialoguechar)
francis.setPosition(300, 150)
evlist = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
canMove = true
story.showPlayerChoices("Press this for confetti", "Press this for snow")
canMove = false
if (story.checkLastAnswer("Press this for confetti")) {
    effects.confetti.startScreenEffect()
} else {
    effects.blizzard.startScreenEffect()
}
canMove = true
pause(500)
effects.confetti.endScreenEffect()
effects.blizzard.endScreenEffect()
forever(function () {
    if (maxwellMersch.vx == 0 && maxwellMersch.vy == 0) {
        characterAnimations.clearCharacterState(maxwellMersch)
        characterAnimations.setCharacterState(maxwellMersch, characterAnimations.rule(Predicate.NotMoving))
    } else {
        characterAnimations.clearCharacterState(maxwellMersch)
    }
})
// paper
forever(function () {
    if (maxwellMersch.overlapsWith(paper)) {
        evlist[0] = 1
        sprites.destroy(paper)
    }
})
forever(function () {
    if (canMove) {
        controller.moveSprite(maxwellMersch)
    }
})
forever(function () {
	
})
