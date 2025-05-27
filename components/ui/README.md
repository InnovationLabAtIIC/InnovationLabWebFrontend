# IVLAB UI Component Library

A comprehensive, modern React component library built with TypeScript, Tailwind CSS, and Framer Motion. Designed for flexibility, accessibility, and beautiful animations.


```bash
# Import components
import { Typography, Button, Card, Input, Badge, Modal, Tooltip } from '@/components/ui'
```

## 📚 Components

### Typography

A flexible typography component for consistent text styling across your application.

**Props:**
- `variant`: Text style variant (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `button`, `caption`, `overline`)
- `color`: Text color (`primary`, `secondary`, `tertiary`, `accent`, `success`, `warning`, `error`, `info`, `white`, `muted`)
- `weight`: Font weight (`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`)
- `align`: Text alignment (`left`, `center`, `right`, `justify`)
- `animated`: Enable enter animation (boolean)
- `className`: Additional CSS classes

**Examples:**
```jsx
<Typography variant="h1" color="primary" animated>
  Main Heading
</Typography>

<Typography variant="body1" color="secondary" weight="medium">
  Body text with medium weight
</Typography>

<Typography variant="caption" color="muted">
  Small caption text
</Typography>
```

---

### Button

A versatile button component with multiple variants, sizes, and interactive states.

**Props:**
- `variant`: Button style (`primary`, `secondary`, `outline`, `ghost`, `success`, `warning`, `error`, `info`)
- `size`: Button size (`xs`, `sm`, `md`, `lg`, `xl`)
- `fullWidth`: Take full width (boolean)
- `loading`: Show loading state (boolean)
- `disabled`: Disable button (boolean)
- `startIcon`: Icon before text (ReactNode)
- `endIcon`: Icon after text (ReactNode)
- `onClick`: Click handler

**Examples:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Primary Action
</Button>

<Button variant="outline" loading disabled>
  Loading...
</Button>

<Button variant="success" startIcon={<CheckIcon />} fullWidth>
  Complete Action
</Button>
```

---

### MagneticButton

An interactive button with magnetic mouse-following effect and 3D animations.

**Props:**
- `variant`: Button style (`dark`, `light`, `outline`, `gradient`)
- `size`: Button size (`sm`, `md`, `lg`)
- `onClick`: Click handler
- `className`: Additional CSS classes

**Examples:**
```jsx
<MagneticButton variant="gradient" size="lg">
  Hover Me
</MagneticButton>

<MagneticButton variant="outline" onClick={handleClick}>
  Interactive Button
</MagneticButton>
```

---

### Card

A flexible container component for organizing content with multiple styling variants.

**Props:**
- `variant`: Card style (`default`, `bordered`, `shadow`, `floating`, `gradient`)
- `padding`: Internal spacing (`none`, `sm`, `md`, `lg`, `xl`)
- `interactive`: Enable hover effects (boolean)
- `className`: Additional CSS classes

**Subcomponents:**
- `CardHeader`: Header section with border
- `CardContent`: Main content area
- `CardFooter`: Footer section with border

**Examples:**
```jsx
<Card variant="floating" interactive padding="lg">
  <CardHeader>
    <Typography variant="h3">Card Title</Typography>
  </CardHeader>
  <CardContent>
    <Typography variant="body1">Card content goes here.</Typography>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Action</Button>
  </CardFooter>
</Card>
```

---

### Input

A comprehensive input component with validation, icons, and multiple styling variants.

**Props:**
- `label`: Input label text
- `variant`: Input style (`default`, `filled`, `outlined`, `underlined`)
- `size`: Input size (`sm`, `md`, `lg`)
- `error`: Error message
- `helperText`: Helper text
- `startIcon`: Icon at input start (ReactNode)
- `endIcon`: Icon at input end (ReactNode)
- `fullWidth`: Take full width (boolean)

**Examples:**
```jsx
<Input 
  label="Email Address"
  type="email"
  variant="outlined"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

<Input 
  label="Search"
  variant="filled"
  startIcon={<SearchIcon />}
  endIcon={<ClearIcon />}
/>

<Input 
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
  variant="default"
/>
```

---

### Badge

Small status descriptors perfect for counts, labels, and status indicators.

**Props:**
- `variant`: Badge style (`default`, `primary`, `secondary`, `success`, `warning`, `error`, `info`, `outline`)
- `size`: Badge size (`sm`, `md`, `lg`)
- `rounded`: Make badge circular (boolean)
- `removable`: Show remove button (boolean)
- `onRemove`: Remove handler
- `onClick`: Click handler

**Examples:**
```jsx
<Badge variant="success" size="sm">Active</Badge>

<Badge variant="error" rounded>3</Badge>

<Badge variant="secondary" removable onRemove={handleRemove}>
  Removable Tag
</Badge>
```

---

### Modal

A flexible modal dialog with overlay, animations, and accessibility features.

**Props:**
- `isOpen`: Modal visibility (boolean)
- `onClose`: Close handler
- `title`: Modal title
- `size`: Modal size (`sm`, `md`, `lg`, `xl`, `full`)
- `showCloseButton`: Show close button (boolean)
- `closeOnOverlayClick`: Close on overlay click (boolean)
- `closeOnEscape`: Close on escape key (boolean)

**Subcomponents:**
- `ModalHeader`: Header section
- `ModalBody`: Content area
- `ModalFooter`: Footer with actions

**Examples:**
```jsx
<Modal 
  isOpen={isModalOpen} 
  onClose={closeModal}
  title="Confirm Action"
  size="md"
>
  <ModalBody>
    <Typography variant="body1">
      Are you sure you want to continue?
    </Typography>
  </ModalBody>
  <ModalFooter>
    <Button variant="secondary" onClick={closeModal}>
      Cancel
    </Button>
    <Button variant="primary" onClick={confirmAction}>
      Confirm
    </Button>
  </ModalFooter>
</Modal>
```

---

### Tooltip

Floating tooltips that provide additional context on hover or focus.

**Props:**
- `content`: Tooltip content (ReactNode)
- `position`: Tooltip position (`top`, `bottom`, `left`, `right`)
- `delay`: Show delay in milliseconds
- `disabled`: Disable tooltip (boolean)
- `arrow`: Show arrow pointer (boolean)
- `className`: Additional CSS classes

**Examples:**
```jsx
<Tooltip content="This is helpful information">
  <Button variant="outline">Hover for info</Button>
</Tooltip>

<Tooltip 
  content={
    <div>
      <Typography variant="subtitle2" color="white">Feature Info</Typography>
      <Typography variant="body2" color="white">
        Detailed explanation here.
      </Typography>
    </div>
  }
  position="right"
  delay={300}
>
  <InfoIcon />
</Tooltip>
```

---

## 🎨 Design Tokens

### Colors
- **Primary**: Blue (`blue-600`)
- **Secondary**: Gray (`gray-200`)
- **Success**: Green (`green-600`)
- **Warning**: Yellow (`yellow-500`)
- **Error**: Red (`red-600`)
- **Info**: Cyan (`cyan-600`)

### Typography Scale
- **h1**: 4xl-6xl (36px-60px)
- **h2**: 3xl-5xl (30px-48px)
- **h3**: 2xl-4xl (24px-36px)
- **h4**: xl-3xl (20px-30px)
- **h5**: lg-2xl (18px-24px)
- **h6**: base-xl (16px-20px)
- **body1**: base (16px)
- **body2**: sm (14px)
- **caption**: xs (12px)

### Spacing Scale
- **xs**: 2px
- **sm**: 4px  
- **md**: 8px
- **lg**: 16px
- **xl**: 24px
- **2xl**: 32px

---

## 🔧 Best Practices

### Accessibility
- All components include proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

### Performance
- Tree-shakeable imports
- Optimized animations with Framer Motion
- Minimal re-renders
- Lazy loading support

---

## 🛠️ Development

### Adding New Components

1. Create component file in `/components/ui/`
2. Include TypeScript interface
3. Add comprehensive JSDoc documentation
4. Include usage examples
5. Export from main index file
6. Update this documentation

### Component Structure
```typescript
interface ComponentProps {
  // Props with clear descriptions
}

/**
 * Component description with examples
 */
const Component: React.FC<ComponentProps> = ({
  // Props with defaults
}) => {
  // Component logic
  return (
    // JSX with proper accessibility
  );
};

export default Component;
```

---


