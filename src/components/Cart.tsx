import { CheckIcon, ClockIcon } from '@heroicons/react/solid';
import { useCart } from '../lib/cartState';
import ModifyCartSelector from './ModifyCartSelector';

// const products = [
//   {
//     id: 1,
//     name: 'Nomad Tumbler',
//     href: '#',
//     price: '$35.00',
//     color: 'White',
//     inStock: true,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
//     imageAlt: 'Insulated bottle with white base and black snap lid.',
//   },
//   {
//     id: 2,
//     name: 'Basic Tee',
//     href: '#',
//     price: '$32.00',
//     color: 'Sienna',
//     inStock: true,
//     size: 'Large',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   // More products...
// ];

export default function Cart() {
  const { cartContents: cart, removeFromCart, modifyCartQuantity } = useCart();
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Shopping Cart
        </h1>

        <form className="mt-12">
          <div>
            <h2 className="sr-only">Items in your shopping cart</h2>

            <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((cartItem) => (
                <li key={cartItem.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={cartItem.image?.url}
                      alt={cartItem.title}
                      className="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"
                    />
                  </div>

                  <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {cartItem.title}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {/* {product.color} */} Color {/* TODO: *change */}
                          </p>
                          {/* {product.size ? (
                            <p className="mt-1 text-sm text-gray-500">
                              {product.size}
                            </p>
                          ) : null} */}
                          <p>Size</p> {/* TODO: *change */}
                        </div>

                        <p className="text-sm font-medium text-gray-900 text-right">
                          ${cartItem.price}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                        <ModifyCartSelector product={cartItem} />
                        {/* / TODO: INVESTIVATE WHY NO TYPE ERROR IF NO PROPS PROVIDED */}
                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                          onClick={() => removeFromCart(cartItem)}
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                      {/* {product.inStock ? (
                        <CheckIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ClockIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-300"
                          aria-hidden="true"
                        />
                      )} */}

                      {/* <span>
                        {product.inStock
                          ? 'In stock'
                          : `Ships in ${product.leadTime}`}
                      </span> */}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-32 sm:pl-6">
            <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 text-sm divide-y divide-gray-200">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">$99.00</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-medium text-gray-900">$5.00</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">$8.32</dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      $112.32
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-sm text-center text-gray-500">
              <p>
                or{' '}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-500"
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
