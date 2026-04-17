import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, computed } from "vue";
import Combobox from "./Combobox.vue";
import ComboboxInputField from "./ComboboxInputField.vue";
import ComboboxOptionsList from "./ComboboxOptionsList.vue";
import ComboboxOptionItem from "./ComboboxOptionItem.vue";
import ComboboxEmpty from "./ComboboxEmpty.vue";

const meta: Meta = {
  title: "Forms/Combobox",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: Combobox as any,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj;

const FRUITS = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"];

export const Default: Story = {
  render: () => ({
    components: { Combobox, ComboboxInputField, ComboboxOptionsList, ComboboxOptionItem, ComboboxEmpty },
    setup() {
      const selected = ref<string | null>(null);
      const query = ref("");
      const filtered = computed(() =>
        query.value === ""
          ? FRUITS
          : FRUITS.filter((f) => f.toLowerCase().includes(query.value.toLowerCase()))
      );
      return { selected, query, filtered };
    },
    template: `
      <div class="max-w-xs">
        <label class="block text-sm font-medium text-gray-700 mb-1">Fruit</label>
        <Combobox v-model="selected">
          <ComboboxInputField
            placeholder="Search fruits..."
            :display-value="(v) => v ?? ''"
            @change="query = $event.target.value"
          />
          <ComboboxOptionsList>
            <ComboboxEmpty v-if="filtered.length === 0" />
            <ComboboxOptionItem v-for="fruit in filtered" :key="fruit" :value="fruit">
              {{ fruit }}
            </ComboboxOptionItem>
          </ComboboxOptionsList>
        </Combobox>
        <p class="mt-2 text-sm text-gray-500">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `,
  }),
  args: {},
};
