import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Star, Globe, Users, TrendingUp } from 'lucide-react'

const stats = [
  { value: 5000, suffix: '+', label: 'Visas Approved', icon: Award, color: '#14B8A6' },
  { value: 98, suffix: '%', label: 'Success Rate', icon: Star, color: '#38BDF8' },
  { value: 15, suffix: '+', label: 'Countries Served', icon: Globe, color: '#A78BFA' },
  { value: 12, suffix: '+', label: 'Years Experience', icon: Users, color: '#FB923C' },
  { value: 2, suffix: 'hrs', label: 'Avg Response Time', icon: TrendingUp, color: '#34D399' },
]

function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const raf = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F172A 100%)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: `${stat.color}18`,
                  border: `1px solid ${stat.color}30`,
                }}
              >
                <stat.icon size={20} color={stat.color} />
              </div>
              <div>
                <p
                  className="font-extrabold leading-none mb-1"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                    color: stat.color,
                    letterSpacing: '-0.03em',
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.45)' }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
