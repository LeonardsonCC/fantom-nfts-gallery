export default function FullScreen({ children, ...props }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center" {...props}>
      {children}
    </div>
  )
}