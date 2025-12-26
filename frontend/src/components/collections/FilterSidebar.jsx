import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'living-room', label: 'Living Room' },
  { value: 'dining', label: 'Dining Room' },
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'office', label: 'Office' },
];

const materials = [
  { value: 'Oak Wood', label: 'Oak Wood' },
  { value: 'Walnut', label: 'Walnut' },
  { value: 'Leather', label: 'Leather' },
  { value: 'Fabric', label: 'Fabric' },
  { value: 'Metal', label: 'Metal' },
];

export default function FilterSidebar({ filters, setFilters }) {
  const handleCategoryChange = (category) => {
    setFilters({ ...filters, category });
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  const handleMaterialToggle = (material) => {
    const updatedMaterials = filters.material.includes(material)
      ? filters.material.filter((m) => m !== material)
      : [...filters.material, material];
    setFilters({ ...filters, material: updatedMaterials });
  };

  const handleStockToggle = () => {
    setFilters({ ...filters, inStock: !filters.inStock });
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: [0, 5000],
      material: [],
      inStock: false,
    });
  };

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.material.length > 0 ||
    filters.inStock ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 5000;

  return (
    <Card className="p-6 sticky top-28 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Category</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                filters.category === category.value
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-muted-foreground'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-4">
        <Label className="text-sm font-semibold">Price Range</Label>
        <div className="px-2">
          <Slider
            min={0}
            max={5000}
            step={100}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Material Filter */}
      <div className="space-y-3">
        <Label className="text-sm font-semibold">Material</Label>
        <div className="space-y-3">
          {materials.map((material) => (
            <div key={material.value} className="flex items-center space-x-2">
              <Checkbox
                id={material.value}
                checked={filters.material.includes(material.value)}
                onCheckedChange={() => handleMaterialToggle(material.value)}
              />
              <label
                htmlFor={material.value}
                className="text-sm text-muted-foreground cursor-pointer"
              >
                {material.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Stock Filter */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={filters.inStock}
            onCheckedChange={handleStockToggle}
          />
          <label
            htmlFor="inStock"
            className="text-sm font-semibold cursor-pointer"
          >
            In Stock Only
          </label>
        </div>
      </div>
    </Card>
  );
}