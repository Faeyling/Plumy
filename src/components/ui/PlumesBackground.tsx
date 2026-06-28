const PLUMES = [
  {
    src: '/plumes/plume-duo-croisees.png',
    style: {
      top: '-5%',
      right: '-8%',
      width: '55vw',
      maxWidth: 280,
      rotate: '12deg',
      opacity: 0.11,
    },
  },
  {
    src: '/plumes/plume-duo-arc.png',
    style: {
      bottom: '8%',
      left: '-10%',
      width: '50vw',
      maxWidth: 260,
      rotate: '-20deg',
      opacity: 0.09,
    },
  },
  {
    src: '/plumes/plume-solo-reve.png',
    style: {
      top: '38%',
      right: '-14%',
      width: '42vw',
      maxWidth: 200,
      rotate: '5deg',
      opacity: 0.07,
    },
  },
]

export function PlumesBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {PLUMES.map(({ src, style }) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          style={{
            position: 'absolute',
            mixBlendMode: 'multiply',
            ...style,
          }}
        />
      ))}
    </div>
  )
}
