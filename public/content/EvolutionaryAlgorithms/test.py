import numpy as np
import matplotlib.pyplot as plt
from scipy.interpolate import interp1d
from mpl_toolkits.mplot3d import Axes3D


def create_track(control_points, num_points=1000):
    control_points = np.vstack((control_points, control_points[0]))
    t = np.linspace(0, 1, len(control_points))
    fx = interp1d(t, control_points[:, 0], kind='cubic')
    fy = interp1d(t, control_points[:, 1], kind='cubic')
    t_fine = np.linspace(0, 1, num_points)
    x, y = fx(t_fine), fy(t_fine)
    return x, y


def calculate_curvature(x, y):
    dx, dy = np.gradient(x), np.gradient(y)
    ddx, ddy = np.gradient(dx), np.gradient(dy)
    curvature = np.abs(dx * ddy - dy * ddx) / (dx ** 2 + dy ** 2) ** 1.5
    return curvature


def speed_evaluation(control_points):
    x, y = create_track(control_points)
    curvature = calculate_curvature(x, y)
    return 1 / (1 + np.mean(curvature))


def speed_complexity_evaluation(control_points):
    x, y = create_track(control_points)
    curvature = calculate_curvature(x, y)
    speed_factor = 1 / (1 + np.mean(curvature))
    complexity_factor = np.std(curvature)
    return speed_factor * (1 + complexity_factor)


# Create a grid of potential control point variations
grid_size = 20
x_range = np.linspace(-0.5, 0.5, grid_size)
y_range = np.linspace(-0.5, 0.5, grid_size)
X, Y = np.meshgrid(x_range, y_range)

# Base control points
base_points = np.array([[0., 0.], [1., 1.], [2., -1.], [3., 0.], [2., 2.], [0., 1.]])

# Calculate fitness landscapes
speed_landscape = np.zeros((grid_size, grid_size))
speed_complexity_landscape = np.zeros((grid_size, grid_size))

for i in range(grid_size):
    for j in range(grid_size):
        modified_points = base_points.copy()
        modified_points[2] += [X[i, j], Y[i, j]]  # Modify one control point
        speed_landscape[i, j] = speed_evaluation(modified_points)
        speed_complexity_landscape[i, j] = speed_complexity_evaluation(modified_points)

# Plotting
fig1, axs = plt.subplots(1, 3, figsize=(18, 6))

for i in range(3):
    # Modify only the third control point
    modified_points = base_points.copy()
    if i == 0:
        modified_points[2] += [0, 1.8]  # Move up and right
    elif i == 1:
        modified_points[2] += [-0.5, 2.8]  # Move down and left
    else:
        modified_points[2] += [-1.2, 1.9]  # Move right and slightly down

    x, y = create_track(modified_points)
    axs[i].plot(x, y, 'k-')

    # Plot all control points
    axs[i].scatter(modified_points[:, 0], modified_points[:, 1], color='red', zorder=3)

    # Highlight the changing control point in light blue
    axs[i].scatter(modified_points[2, 0], modified_points[2, 1], color='lightblue', s=100, zorder=4)

    axs[i].set_aspect('equal')
    axs[i].set_xticks([])
    axs[i].set_yticks([])

    # Calculate and display evaluation scores
    speed_score = speed_evaluation(modified_points)
    speed_complexity_score = speed_complexity_evaluation(modified_points)
    axs[i].set_title(f'Speed: {speed_score:.2f}\nSpeed & Complexity: {speed_complexity_score:.2f}')

plt.tight_layout()

# Fitness landscapes
fig2, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 6), subplot_kw={'projection': '3d'})
fig2.suptitle('Track Design Optimization Landscapes', fontsize=16)

surf1 = ax1.plot_surface(X, Y, speed_landscape, cmap='viridis')
ax1.set_title('Speed Optimization Landscape')
ax1.set_xlabel('Control Point X Adjustment')
ax1.set_ylabel('Control Point Y Adjustment')
ax1.set_zlabel('Speed Performance')

surf2 = ax2.plot_surface(X, Y, speed_complexity_landscape, cmap='viridis')
ax2.set_title('Speed & Curvature Complexity Optimization Landscape')
ax2.set_xlabel('Control Point X Adjustment')
ax2.set_ylabel('Control Point Y Adjustment')
ax2.set_zlabel('Speed & Complexity Score')

# Remove z-axis ticks
ax1.set_zticks([])
ax2.set_zticks([])

plt.show()