// export default function AboutHero() {
//     return (
//       <div>
//         <p className="font-medium  -mb-6"> About</p>
//         <h1 className="font-black text-[64px] text-[#21409A]">Innovation Lab</h1>
//       </div>
//     )
//   }
  

import  Typography from "@/components/ui/Typography"

export default function AboutHero() {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-2">
        <Typography variant="h6" color="muted">
          About
        </Typography>
      </div>
      <Typography variant="h1" color="accent" animated>
        Innovation Lab
      </Typography>
    </div>
  )
}
